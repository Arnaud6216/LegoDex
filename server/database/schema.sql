create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null unique,
  description text not null
);

create table legoset (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  set_number int unsigned not null unique,
  number_of_pieces int unsigned not null,
  description text not null,
  img_src varchar(255) not null,
  category_id int unsigned,
  foreign key(category_id) references category(id)
);

insert into category(id, name, description)
values
  (1, "Star Wars", "Découvrez des sets LEGO inspirés de l'univers Star Wars, avec des vaisseaux iconiques et des personnages légendaires, pour revivre les moments épiques de la saga."),
  (2, "Harry Potter", "Explorez le monde magique de Harry Potter avec des sets LEGO qui vous permettent de reconstruire Poudlard et de vivre les aventures des sorciers."),
  (3, "Marvel", "Plongez dans l'univers Marvel avec des sets LEGO des Avengers, Spider-Man et autres héros, pour recréer des scènes d'action spectaculaires.");

insert into legoset(id, name, set_number, number_of_pieces, description, img_src, category_id)
values
  (1, "X wing", 75355, 1953, "Le légendaire X-Wing, chasseur emblématique de la Rébellion, conçu pour affronter l'Empire dans des batailles spatiales épiques.", "/public/xwing.webp", 1),
  (2, "Croiseur Venator", 75367, 5374, "Vaisseau de guerre principal utilisé par la république pendant la guerre des clones.", "/public/venator.webp", 1),
  (3, "Faucon Millennium", 75192, 7541, "Le vaisseau le plus rapide de la galaxie, piloté par Han Solo et Chewbacca.", "/public/faucon.webp", 1),
  (4, "Château de Poudlard", 71043, 6020, "L'école de sorcellerie Poudlard, avec la grande salle, la tour d'astronomie et le bureau de Dumbledore.", "/public/poudlard.webp", 2),
  (5, "Le terrier", 76437, 2405, "La maison de la famille Weasley", "/public/terrier.webp", 2),
  (6, "La tour des Avengers", 76166, 685, "La tour des Avengers, avec ses laboratoires, ses salles de repos et son héliport.", "/public/avenger.webp", 3),
  (7, "Helicarrier", 76042, 2996, "Le porte-avions volant du SHIELD, avec ses hangars, ses laboratoires et ses quartiers.", "/public/helicarrier.webp", 3);
