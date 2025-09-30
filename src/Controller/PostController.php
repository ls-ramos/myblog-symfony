<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use App\Form\PostType;
use App\Repository\PostRepository;

use Psr\Log\LoggerInterface;

#[Route('/api/post', name: 'postapi.')]
class PostController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response{
        return new Response("Post api alive!");
    }

    #[Route('/create', name: 'create')]
    public function create(Request $request, ManagerRegistry $doctrine, LoggerInterface $logger): Response{
        $logger->info("Creating new post");
        $postToCreate = json_decode($request->getContent(), true);

        // TODO: add checks
        // TODO: treat errors
        $entityManager = $doctrine->getManager();

        $post = new Post();
        $form = $this->createForm(PostType::class, $post);
        $form->submit(array_merge($postToCreate, $request->request->all()));

        if ($form->isSubmitted() && $form->isValid()) {
            $newPost = $form->getData();
        
            $entityManager->persist($newPost);
            $entityManager->flush();

            return new Response(json_encode([
                'response' => 'ok',
                'data' => json_encode($newPost)
            ]));
        }

        return new Response(json_encode([
            'response' => 'error'
        ]));
    }

    #[Route('/get', name: 'getAll')]
    public function get(PostRepository $pr): Response{
        $posts = $pr->findAll();
        return new Response(json_encode($posts));
    }
}
