<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Joueur;
use App\Entity\Sponsor;
use App\Entity\Supporter;
use App\Enum\UserType;
use App\Enum\UserStatus;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'api_create_user', methods: ['POST'])]
public function createUser(Request $request, EntityManagerInterface $em): JsonResponse
{
    try {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return new JsonResponse(['error' => 'Données invalides'], 400);
        }

        $user = new User();
        $user->setNom($data['nom'] ?? '');
        $user->setPrenom($data['prenom'] ?? '');
        $user->setEmail($data['email'] ?? '');
        $user->setType(UserType::from($data['type'] ?? 'supporter'));
        $user->setStatus(UserStatus::PENDING);
        $user->setCreatedAt(new \DateTimeImmutable());
        $user->setPhoneNumber($data['phoneNumber'] ?? '');

        $em->persist($user);
        $em->flush();

        switch ($data['type']) {
            case 'joueur':
                $joueur = new Joueur();
                $joueur->setUser($user)
                       ->setAge($data['age'] ?? 0)
                       ->setPoste($data['poste'] ?? '')
                       ->setLicence(!empty($data['licence']));
                $em->persist($joueur);
                break;

            case 'sponsor':
                $sponsor = new Sponsor();
                $sponsor->setUser($user)
                        ->setSociete($data['societe'] ?? '')
                        ->setBudget($data['budget'] ?? null);
                $em->persist($sponsor);
                break;

            case 'supporter':
                $supporter = new Supporter();
                $supporter->setUser($user);
                $em->persist($supporter);
                break;
        }

        $em->flush();

        return new JsonResponse([
            'message' => 'Utilisateur créé avec succès'
        ], 201);

    } catch (\Exception $e) {
        return new JsonResponse([
            'error' => 'Erreur serveur',
            'message' => $e->getMessage()
        ], 500);
    }
}
}