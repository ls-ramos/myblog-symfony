<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    // #[Route('/{reactRouting?}', name: 'reactapp', requirements: ['reactRouting' => '.+'])]
    // This is route is defined in config so it is the last one to be processed
    public function getReactApp(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/api/test', name: 'apiTest')]
    public function test(): Response
    {
        return new Response('Api is alive');
    }

}
