-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2020 at 10:59 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_berita`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(11) NOT NULL,
  `nama_barang` varchar(100) DEFAULT NULL,
  `stok_barang` int(10) DEFAULT NULL,
  `harga_barang` int(10) DEFAULT NULL,
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama_barang`, `stok_barang`, `harga_barang`, `updateAt`, `createAt`) VALUES
(5, 'kayu', 10, 1000, '2020-07-27 08:09:14', '2020-07-27 08:09:14'),
(6, 'kayu', 10, 1000, '2020-07-27 08:09:17', '2020-07-27 08:09:17');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `nama`, `email`, `password`, `updateAt`, `createAt`) VALUES
(1, 'Norma Titan Anggraini', 'normatitan@gmail.com', '$2b$10$Q/vgv2PPkJYLnQ6ig94Y4u1chGgLARxnLtb7BVC75igCueBmb2SRy', '2020-07-27 02:09:55', '2020-07-27 02:10:45'),
(4, 'eko purnomo', 'ekobeberapa123@gmail.com', '$2b$10$SsGLRCF/CkHDAuEiWsRaUueSN5uPK3HFrzm8v6f8jDMz22MGChEoy', '2020-07-27 02:09:55', '2020-07-27 02:10:45'),
(5, 'Muhamad Erland', 'test123@gmail.com', '$2b$10$6HOyQ13EDpJ5MMlzMH6gTuqGqsHjh/gGGQGN7ikMEn7uJo7QQPAPG', '2020-07-27 02:09:55', '2020-07-27 02:10:45'),
(6, 'Sahidin', 'test124@gmail.com', '$2b$10$OAoxsKcauN0GXiM5azNJHu5l2uudlZpArm/7kHCsvIzYC10dJOVZC', '2020-07-27 02:09:55', '2020-07-27 02:10:45'),
(13, 'Fairus Antasari', 'test125@gmail.com', '$2b$10$X1PP91/Giy3ntLiNl4rEhuBw1sxQmjWp3dZeQEuM.6rtyoX.eiAjW', '2020-07-27 07:59:37', '2020-07-27 07:59:37');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_barang` varchar(100) DEFAULT NULL,
  `jumlah_pembelian` int(10) DEFAULT NULL,
  `harga_barang` int(10) DEFAULT NULL,
  `bayar` int(10) DEFAULT NULL,
  `kembalian` int(10) DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `id_barang`, `jumlah_pembelian`, `harga_barang`, `bayar`, `kembalian`, `createAt`, `updateAt`) VALUES
(1, '5', 2, 1000, 3000, 2000, '2020-07-27 08:37:56', '2020-07-27 08:37:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
