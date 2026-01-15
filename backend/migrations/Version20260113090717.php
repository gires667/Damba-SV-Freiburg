<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260113090717 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE sponsor (id INT AUTO_INCREMENT NOT NULL, societe VARCHAR(180) NOT NULL, budget INT DEFAULT NULL, user_id INT NOT NULL, UNIQUE INDEX UNIQ_818CC9D4A76ED395 (user_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE sponsor ADD CONSTRAINT FK_818CC9D4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sponsor DROP FOREIGN KEY FK_818CC9D4A76ED395');
        $this->addSql('DROP TABLE sponsor');
    }
}
