-- CreateTable
CREATE TABLE `Departamento` (
    `Id_departamento` INTEGER NOT NULL AUTO_INCREMENT,
    `Departamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`Id_departamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Municipio` (
    `Id_municipio` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_departamento` INTEGER NOT NULL,
    `Municipio` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`Id_municipio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direccion` (
    `Id_direccion` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_municipio` INTEGER NOT NULL,
    `Direccion` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`Id_direccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persona` (
    `Id_persona` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_municipio` INTEGER NOT NULL,
    `Cc` INTEGER NOT NULL,
    `Nombre` VARCHAR(50) NOT NULL,
    `Apellido` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`Id_persona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefono` (
    `Id_telefono` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_persona` INTEGER NOT NULL,
    `numero` VARCHAR(13) NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_telefono`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rol` (
    `Id_rol` INTEGER NOT NULL AUTO_INCREMENT,
    `Rol` VARCHAR(50) NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `Id_permiso` INTEGER NOT NULL AUTO_INCREMENT,
    `Permiso` VARCHAR(50) NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_permiso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso_tiene_rol` (
    `Id_permiso_tine_rol` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_rol` INTEGER NOT NULL,
    `fk_permiso` INTEGER NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_permiso_tine_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `Id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_persona` INTEGER NOT NULL,
    `fk_rol` INTEGER NOT NULL DEFAULT 1,
    `Correo` VARCHAR(100) NOT NULL,
    `Clave` VARCHAR(200) NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proyecto` (
    `Id_proyecto` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_usuario` INTEGER NOT NULL,
    `Titulo` VARCHAR(300) NOT NULL,
    `Descripcion` TEXT NOT NULL,
    `Fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_proyecto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Encabezado` (
    `Id_encabezado` INTEGER NOT NULL AUTO_INCREMENT,
    `Titulo` VARCHAR(300) NOT NULL,
    `Descripcion` TEXT NOT NULL,

    PRIMARY KEY (`Id_encabezado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagen` (
    `Id_Imagen` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_proyecto` INTEGER NULL,
    `fk_encabezado` INTEGER NULL,
    `Url` TEXT NOT NULL,
    `Img_principal` BOOLEAN NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`Id_Imagen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Municipio` ADD CONSTRAINT `Municipio_fk_departamento_fkey` FOREIGN KEY (`fk_departamento`) REFERENCES `Departamento`(`Id_departamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_fk_municipio_fkey` FOREIGN KEY (`fk_municipio`) REFERENCES `Municipio`(`Id_municipio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Persona` ADD CONSTRAINT `Persona_fk_municipio_fkey` FOREIGN KEY (`fk_municipio`) REFERENCES `Municipio`(`Id_municipio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefono` ADD CONSTRAINT `Telefono_fk_persona_fkey` FOREIGN KEY (`fk_persona`) REFERENCES `Persona`(`Id_persona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permiso_tiene_rol` ADD CONSTRAINT `Permiso_tiene_rol_fk_rol_fkey` FOREIGN KEY (`fk_rol`) REFERENCES `Rol`(`Id_rol`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permiso_tiene_rol` ADD CONSTRAINT `Permiso_tiene_rol_fk_permiso_fkey` FOREIGN KEY (`fk_permiso`) REFERENCES `Permiso`(`Id_permiso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fk_persona_fkey` FOREIGN KEY (`fk_persona`) REFERENCES `Persona`(`Id_persona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fk_rol_fkey` FOREIGN KEY (`fk_rol`) REFERENCES `Rol`(`Id_rol`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proyecto` ADD CONSTRAINT `Proyecto_fk_usuario_fkey` FOREIGN KEY (`fk_usuario`) REFERENCES `Usuario`(`Id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagen` ADD CONSTRAINT `Imagen_fk_proyecto_fkey` FOREIGN KEY (`fk_proyecto`) REFERENCES `Proyecto`(`Id_proyecto`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagen` ADD CONSTRAINT `Imagen_fk_encabezado_fkey` FOREIGN KEY (`fk_encabezado`) REFERENCES `Encabezado`(`Id_encabezado`) ON DELETE SET NULL ON UPDATE CASCADE;
