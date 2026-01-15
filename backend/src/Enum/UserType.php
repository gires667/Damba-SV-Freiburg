<?php

namespace App\Enum;

enum UserType: string

{

    case SUPPORTER = 'supporter';
    case JOUEUR = 'joueur';
    case SPONSOR = 'sponsor';

}