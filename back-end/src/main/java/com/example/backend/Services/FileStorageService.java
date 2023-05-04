package com.example.backend.Services;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.Exceptions.FileStorageException;
import com.example.backend.Repositories.FileRepository;
import com.example.backend.entities.FileEntity;
import com.example.backend.entities.FileStorageProperties;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FileStorageService {


    @Autowired
    private FileRepository fileRepository;

//     @Autowired
//     public FileStorageService(FileStorageProperties fileStorageProperties) {
//     this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
//             .toAbsolutePath().normalize();

//     try {
//         Files.createDirectories(this.fileStorageLocation);
//         if (!Files.isWritable(this.fileStorageLocation)) {
//             throw new FileStorageException("The directory " + this.fileStorageLocation.toString() + " is not writable.");
//         }
//     } catch (Exception ex) {
//         throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
//     }
// }
    public String storeFile(MultipartFile file) throws SerialException, SQLException, IOException {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

    
    

            // Copy file to the target location (Replacing existing file with the same name)

            // Save file information to database
            FileEntity fileEntity = new FileEntity();
            fileEntity.setFileName(fileName);
            fileEntity.setFileType(file.getContentType());
            fileEntity.setSize(file.getSize());
            fileEntity.setFile(file.getBytes());
            System.out.println(file.getBytes());
            fileRepository.save(fileEntity);

            return "saved";
     
    }
//     public Resource loadFileAsResource(String fileName) throws FileNotFoundException {
//       try {
//           Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
//           Resource resource = new UrlResource(filePath.toUri());
//           if (resource.exists() && resource.isReadable()) {
//               return resource;
//           } else {
//               throw new FileNotFoundException("File not found " + fileName);
//           }
//       } catch (MalformedURLException ex) {
//           throw new FileNotFoundException("File not found " + fileName);
//       }
//   }
  
   

    
}
