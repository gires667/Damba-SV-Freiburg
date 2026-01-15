<?php

namespace App\DataFixtures;

use App\Entity\Media;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MediaFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $media = new Media();
        $media->setUrl('https://res.cloudinary.com/dc4gctzct/image/upload/v1768476431/soccer-ball-support-or-team-in-a-huddle-for-motiv-2025-04-06-09-28-39-utc_buaqs9.jpg');
        $media->setAlt('team memebrers girls celebrating with barcelona sport wear ');
        $media->setTitle('Foot-acceuil');
        $media->setDescription('image de filles avec le maillot de Fc barcelone');
        $media->setCreatedAt(new \DateTimeImmutable());
        
        $manager->persist($media);
        $manager->flush();

    }
}
