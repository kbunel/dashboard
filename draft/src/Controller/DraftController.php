<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DraftController extends AbstractController
{
    /**
     * @Route("/", name="draft")
     */
    public function index()
    {
        return $this->render('draft/index.html.twig', [
            'controller_name' => 'DraftController',
        ]);
    }
}
