-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Φιλοξενητής: 127.0.0.1
-- Χρόνος δημιουργίας: 21 Ιουν 2020 στις 17:16:42
-- Έκδοση διακομιστή: 10.4.11-MariaDB
-- Έκδοση PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `nadia_hotel2`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `aksiologish`
--

CREATE TABLE `aksiologish` (
  `id` int(11) NOT NULL,
  `star1` int(11) NOT NULL,
  `star2` int(11) NOT NULL,
  `star3` int(11) NOT NULL,
  `star4` int(11) NOT NULL,
  `star5` int(11) NOT NULL,
  `star6` int(11) NOT NULL,
  `text` text NOT NULL,
  `protash` int(11) NOT NULL,
  `ektipwsh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `aksiologish`
--

INSERT INTO `aksiologish` (`id`, `star1`, `star2`, `star3`, `star4`, `star5`, `star6`, `text`, `protash`, `ektipwsh`) VALUES
(1, 5, 5, 5, 5, 5, 5, 'ΚΑΛΟΟΟΟ ΠΟΛΥ ΚΑΛΛΟΟΟ!', 1, 1),
(2, 5, 5, 5, 5, 5, 5, 'καλό', 1, 1),
(3, 4, 4, 4, 4, 4, 5, 'Hotel and Casino was fine!', 1, 1),
(4, 3, 4, 2, 5, 1, 3, 'Έχω πάει και σε καλύτερα.', 1, 0);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `desmefsh_dwmatioy`
--

CREATE TABLE `desmefsh_dwmatioy` (
  `id_krathshs` int(11) NOT NULL,
  `id_kathgorias` varchar(255) NOT NULL,
  `plhthos_dwmatiwn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Άδειασμα δεδομένων του πίνακα `desmefsh_dwmatioy`
--

INSERT INTO `desmefsh_dwmatioy` (`id_krathshs`, `id_kathgorias`, `plhthos_dwmatiwn`) VALUES
(15, 'King Bed Deluxe Room', 1),
(15, 'King Bed Superior Room', 2),
(19, 'Deluxe Suite', 1);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dwmatia`
--

CREATE TABLE `dwmatia` (
  `id_kathgorias_dwm` int(11) NOT NULL,
  `kathgoria` varchar(255) NOT NULL,
  `plhthos` int(11) NOT NULL,
  `perigrafh` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `xwrhtikothta` int(11) NOT NULL,
  `kostos_brady` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Άδειασμα δεδομένων του πίνακα `dwmatia`
--

INSERT INTO `dwmatia` (`id_kathgorias_dwm`, `kathgoria`, `plhthos`, `perigrafh`, `photo`, `xwrhtikothta`, `kostos_brady`) VALUES
(1, 'King Bed Superior Room', 50, 'Διαχρονικά και σύγχρονα. Τα Superior δωμάτια του Nadia Hotel αποπνέουν την πολυτέλεια του κλασικού σχεδιασμού σ’ ένα περιβάλλον σύγχρονου εξοπλισμού και ανέσεων. Μια ζεστή, φιλόξενη αγκαλιά με εικαστικές παρεμβάσεις αυθεντικών έργων τέχνης ελλήνων δημιουργών, πλούσια χαλιά, ξύλινα έπιπλα με εξαιρετικά φινιρίσματα, δέρμα και απαλά υφάσματα σε κουρτίνες, καλύμματα και λευκά είδη. Ένα σκηνικό αβίαστης πολυτέλειας που επεκτείνεται και στο χώρο του μπάνιου, με το σπάνιο μάρμαρο Επιδαύρου, ένα ζωντανό κόκκινο στοιχείο σε ένα χώρο καθαρότητας. Τα ευρύχωρα (35τ.μ.) δωμάτια του Nadia Hotel, ιδανικά για διαμονή, εργασία και διασκέδαση, αποτελούν σταθερή αξία στην τουριστική υποδομή του κέντρου της Πάτρας.', 'img/dwmatio1.jpg', 1, 70),
(2, 'King Bed Superior View Room', 50, 'Ουράνιες προσδοκίες. Θα ερωτευτείτε με την πρώτη ματιά αυτή την σαγηνευτική σουίτα. Σχεδιασμένη αποκλειστικά για να ζήσετε αξέχαστες στιγμές, αυτή η πολυτελής και ευρύχωρη σουίτα 72 τ.μ. open plan αισθητικής με το εσωτερικό 1,50cm round Jacuzzi και ειδικό φωτισμό LED που χρωματίζει το νερό σε όλες τις αποχρώσεις του ουράνιου τόξου καθιστώντας το χώρο σε ένα προσωπικό mini spa κατεβάζοντας απλά την εφαρμογή app από το κινητό σας!', 'img/dwmatio2.jpg', 2, 90),
(3, 'King Bed Deluxe Room', 50, 'Ζήστε ατμοσφαιρικά. 27 τ.μ. στον 2ο όροφο με τζάκι και θέα δάσος. Ξυλινη σοφίτα με έξτρα χώρο ύπνου 8 τ.μ. Κατάλληλο και για τριμελή-τετραμελη οικογένεια (για παιδιά άνω των 8 χρ.). Ξύλινα δάπεδα και οροφή, γήινα χρώματα, μοντερνα διακοσμηση. Spring Shower, στεγνωτήρα μαλλιών, επωνυμα είδη καλλωπισμού, μπουρνούζια και παπούτσι μπάνιου, υπερδιπλα κρεβάτια coco mat, διασημα φωτιστικα Flos, δωρεάν πρόσβαση wi-fi, mini bar, προσωπικός δίσκος σερβιρίσματος καφέ, βραστήρας. ', 'img/dwmatio3.jpg', 3, 110),
(4, 'King Bed Premium Suite', 50, 'Οι πολυτελείς Σουίτες είναι η επιτομή της άνεσης για την οποία το Nadia Hotel στη Πάτρα είναι γνωστό. Ποιοτική διαμονή με τα πιο αξιόλογα υφάσματα και υλικά… Με πρόσθετες προσωπικές πινελιές όπως ένα δωρεάν Μίνι μπαρ (αναψυκτικά και μπύρα), παντόφλες, επίπεδη δορυφορική TV, δωρεάν αξεσουάρ μπάνιου και σετ ραψίματος, στεγνωτήρα μαλλιών, μηχανή για καφέ/τσάι, χρηματοκιβώτιο κτλ.', 'img/pic2.jpg', 4, 130),
(5, 'Deluxe Suite', 50, 'Οι Deluxe Σουίτες είναι ιδανικές για 5 άτομα, ένα υπνοδωμάτιο με extra large διπλό κρεβάτι και ένα ξεχωριστό καθιστικό με ανοιγόμενο καναπέ… περιέχουν 2 διαφορετικά υπνοδωμάτια. Μπορούμε να παρέχουμε επίσης 2 Οικογενιακά δωμάτια που επικοινωνούν. Ιδανικά για οικογένειες ή ζευγάρια που ταξιδεύουν μαζί.', 'img/dwmatio5.jpg', 5, 150);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `krathsh`
--

CREATE TABLE `krathsh` (
  `id` int(11) NOT NULL,
  `id_pelath` int(11) NOT NULL,
  `kwdikos` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `kostos` varchar(255) NOT NULL,
  `katastash` int(11) NOT NULL DEFAULT 1,
  `tropos_plhrwmhs` varchar(255) NOT NULL,
  `atoma` int(11) NOT NULL,
  `points` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Άδειασμα δεδομένων του πίνακα `krathsh`
--

INSERT INTO `krathsh` (`id`, `id_pelath`, `kwdikos`, `start_date`, `end_date`, `kostos`, `katastash`, `tropos_plhrwmhs`, `atoma`, `points`) VALUES
(15, 1, ' ', '2020-06-13', '2020-06-26', '3250', 0, 'pistwtikh', 3, 325),
(19, 5, ' ', '2020-06-18', '2020-06-20', '600', 0, 'pistwtikh', 1, 60);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `onoma` varchar(255) DEFAULT NULL,
  `epwnymo` varchar(255) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `xwra` varchar(255) NOT NULL,
  `polh` varchar(255) NOT NULL,
  `onoma_addr` varchar(255) NOT NULL,
  `arithmos_addr` int(11) NOT NULL,
  `tk` int(11) NOT NULL,
  `thlefwno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Άδειασμα δεδομένων του πίνακα `user`
--

INSERT INTO `user` (`userid`, `username`, `onoma`, `epwnymo`, `points`, `email`, `password`, `xwra`, `polh`, `onoma_addr`, `arithmos_addr`, `tk`, `thlefwno`) VALUES
(1, 'aa', 'Γιώργος', 'Παπαδόπουλος', 120, 'a@34', '$2b$10$9xlitJTkKlnnHUz7nR1F1.hkWN9QSQHVxubEl05RJ39vP9LEoCw7i', 'Ελλάδα', 'Αθήνα', 'Συγγρού', 23, 89023, '697891234'),
(2, 'aaa', 'Μαρία', 'Παπαδοπούλου', 140, 's@w', '$2b$10$9xlitJTkKlnnHUz7nR1F1.hkWN9QSQHVxubEl05RJ39vP9LEoCw7i', 'Ελλάδα', 'Πάτρα', 'Πατρέως', 25, 26447, '693333444'),
(3, 'kk', 'k', 'Γεωργίουk', 200, 'k@q', '$2b$10$BjD/u96KXl5IULmi5DR81eSR0tJz3jbOuqwOJRWxS1JjFli1tPG.y', 'Κύπρος', '', 'Λευκωσίας', 12, 1234567, ''),
(4, 'qq', 'Λίνα', 'Λούνα', 200, '1@2', '$2b$10$VTffTnTR4s.grkl0i1/7teGUOPtJ/jQA6f8ZRJ7iL2MM2Y6Lk026S', 'Ελλάδα', 'Πάτρα', 'Λευκωσίας', 12, 1234567, ''),
(5, 'gp', 'Γιώργος ', 'Παπαδάκης', 200, 'kalhmera@ellada.gr', '$2b$10$vNreonUthm7HR.8kuVPrn.DuYv9dZ4bWTmyZojSCbClgXOxEtaDv2', 'Ελλάδα', 'Αθήνα', 'Μαρούσι', 15, 35123, '');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `aksiologish`
--
ALTER TABLE `aksiologish`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `desmefsh_dwmatioy`
--
ALTER TABLE `desmefsh_dwmatioy`
  ADD PRIMARY KEY (`id_krathshs`,`id_kathgorias`);

--
-- Ευρετήρια για πίνακα `dwmatia`
--
ALTER TABLE `dwmatia`
  ADD PRIMARY KEY (`id_kathgorias_dwm`,`kathgoria`);

--
-- Ευρετήρια για πίνακα `krathsh`
--
ALTER TABLE `krathsh`
  ADD PRIMARY KEY (`id`,`id_pelath`),
  ADD KEY `krathsh_fk0` (`id_pelath`);

--
-- Ευρετήρια για πίνακα `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `aksiologish`
--
ALTER TABLE `aksiologish`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT για πίνακα `dwmatia`
--
ALTER TABLE `dwmatia`
  MODIFY `id_kathgorias_dwm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT για πίνακα `krathsh`
--
ALTER TABLE `krathsh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT για πίνακα `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `desmefsh_dwmatioy`
--
ALTER TABLE `desmefsh_dwmatioy`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`id_krathshs`) REFERENCES `krathsh` (`id`) ON DELETE CASCADE;

--
-- Περιορισμοί για πίνακα `krathsh`
--
ALTER TABLE `krathsh`
  ADD CONSTRAINT `krathsh_fk0` FOREIGN KEY (`id_pelath`) REFERENCES `user` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
