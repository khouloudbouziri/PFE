package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@AllArgsConstructor
public class ImageModel implements Serializable {

	public ImageModel() {
		super();
	}

	

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

	

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
	@Column(name = "picByte", length = 1000)
	private byte[] picByte;

	private Long idE;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}
    public void setType(String type) {
		this.type = type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	public ImageModel( String name, String type, byte[] picByte, Long idE) {
		
		this.name = name;
		this.type = type;
		this.picByte = picByte;
		this.idE = idE;
	}

	public ImageModel(byte[] decompressBytes) {
	}

	
}