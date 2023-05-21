package com.example.backend.Controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.Repositories.ImageRepository;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.entities.ImageModel;
import com.example.backend.entities.Visitor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/auth/image")
public class ImageUploadController {
	@Autowired
	ImageRepository imageRepository;
	@Autowired
	VisitorRepository visitorRepository;

	@PostMapping("/upload")
	public ResponseEntity<ImageModel> uplaodImage(@RequestParam("imageFile") MultipartFile file, Long id)
			throws IOException {

		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()), id);

		imageRepository.save(img);

		return ResponseEntity.ok(img);
	}

	@GetMapping(path = { "/get/{idE}" })
	public ImageModel getImage(@PathVariable Long idE) throws IOException {
		final Optional<ImageModel> retrievedImage = imageRepository.findByIdE(idE);
		ImageModel img = new ImageModel(retrievedImage.get().getName(), retrievedImage.get().getType(),
				decompressBytes(retrievedImage.get().getPicByte()), retrievedImage.get().getIdE());
		return img;
	}

	@GetMapping(path = { "/get/all" })
	public List<ImageModel> getAllImages() throws IOException {
		final List<ImageModel> retrievedImage = imageRepository.findAll();
		final List<ImageModel> retrievedImages = new ArrayList<>();
		for (int i = 0; i < retrievedImage.size(); i++) {
			ImageModel img = new ImageModel(retrievedImage.get(i).getName(), retrievedImage.get(i).getType(),
					decompressBytes(retrievedImage.get(i).getPicByte()), retrievedImage.get(i).getIdE());
			retrievedImages.add(img);
		}
		return retrievedImages;
	}

	// compress the image bytes before storing it in the database
	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}

		return outputStream.toByteArray();
	}

	// uncompress the image bytes before returning it to the angular application
	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}

			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}
