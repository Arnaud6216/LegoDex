create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null unique,
  description text not null,
  img_src varchar(255) not null
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

insert into category(id, name, description, img_src)
values
  (1, "Star Wars", "Découvrez des sets LEGO inspirés de l'univers Star Wars, avec des vaisseaux iconiques et des personnages légendaires, pour revivre les moments épiques de la saga.", "./public/starwars.gif"),
  (2, "Harry Potter", "Explorez le monde magique de Harry Potter avec des sets LEGO qui vous permettent de reconstruire Poudlard et de vivre les aventures des sorciers.", "./public/harrypotter.gif"),
  (3, "Marvel", "Plongez dans l'univers Marvel avec des sets LEGO des Avengers, Spider-Man et autres héros, pour recréer des scènes d'action spectaculaires.", "./public/marvel.gif");

insert into legoset(id, name, set_number, number_of_pieces, description, img_src, category_id)
values
  (1, "X wing", 75355, 1953, "Le légendaire X-Wing, chasseur emblématique de la Rébellion, conçu pour affronter l'Empire dans des batailles spatiales épiques.", "/public/xwing.webp", 1),
  (2, "Croiseur Venator", 75367, 5374, "Vaisseau de guerre principal utilisé par la république pendant la guerre des clones.", "/public/venator.jpg", 1),
  (3, "Faucon Millennium", 75192, 7541, "Le vaisseau le plus rapide de la galaxie, piloté par Han Solo et Chewbacca.", "/public/faucon.jpg", 1),
  (4, "A wing", 75275, 1672, "Le A-Wing est un chasseur stellaire rapide et maniable de l'Alliance Rebelle, conçu pour la vitesse et l'interception, avec un cockpit élancé, deux grands moteurs et un armement léger mais efficace.", "/public/awing.jpg", 1),
  (5, "TB-TT", 75313, 6785, "Un imposant quadripède blindé de l’Empire Galactique, redoutable sur le champ de bataille grâce à son épais blindage, sa grande taille et ses puissants canons laser.", "/public/atat.jpg", 1),
  (6, "Intercepteur TIE", 75382, 1931, "Le TIE Interceptor est un chasseur impérial ultra-rapide et agile, reconnaissable à ses ailes en forme de pince", "/public/interceptor.jpg", 1),
  (7, "Destroyer stellaire", 75352, 4784, "Un immense vaisseau de guerre de l'Empire Galactique, doté d’une silhouette en forme de coin, d’un puissant armement, d’un épais blindage et capable de projeter une force écrasante à travers la galaxie.", "/public/destroyer.jpg", 1),
  (8, "Croiseur Arquitens", 75315, 1336, "Un vaisseau polyvalent de la Marine Impériale, compact mais bien armé, doté d’un design élancé avec trois moteurs arrière, utilisé pour l’escorte, la reconnaissance et le soutien aux flottes plus imposantes.", "/public/lightcruiser.jpg", 1),
  (9, "Château de Poudlard", 71043, 6020, "L'école de sorcellerie Poudlard, avec la grande salle, la tour d'astronomie et le bureau de Dumbledore.", "/public/poudlard.webp", 2),
  (10, "Le terrier", 76437, 2405, "La maison de la famille Weasley", "/public/terrier.webp", 2),
  (11, "La tour des Avengers", 76166, 685, "La tour des Avengers, avec ses laboratoires, ses salles de repos et son héliport.", "/public/avenger.webp", 3),
  (12, "Helicarrier", 76042, 2996, "Le porte-avions volant du SHIELD, avec ses hangars, ses laboratoires et ses quartiers.", "/public/helicarrier.webp", 3);
