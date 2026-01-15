<?php

namespace App\Controller;

use App\Entity\Media;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

#[Route('/api')]
class MediaController extends AbstractController
{
    #[Route('/media', name: 'api_media_user', methods: ['POST'])]
    public function createMedia(Request $request, EntityManagerInterface $em): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);

            if (!$data || !is_array($data)) {
                return new JsonResponse(['error' => 'Données invalides'], Response::HTTP_BAD_REQUEST);
            }

            if (empty($data['url'])) {
                return new JsonResponse(['error' => 'L\'URL est requise'], Response::HTTP_BAD_REQUEST);
            }

            $media = new Media();
            $media->setUrl($data['url']);
            $media->setAlt($data['alt'] ?? '');
            $media->setTitle($data['title'] ?? '');
            $media->setDescription($data['description'] ?? null);
            $media->setCreatedAt(new \DateTimeImmutable());

            $em->persist($media);
            $em->flush();

            return new JsonResponse(
                [
                    'message' => 'Media ajouté avec succès',
                    'id' => $media->getId()
                ],
                Response::HTTP_CREATED
            );
        } catch (\Exception $e) {
            return new JsonResponse(
                ['error' => 'Erreur serveur: ' . $e->getMessage()],
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}