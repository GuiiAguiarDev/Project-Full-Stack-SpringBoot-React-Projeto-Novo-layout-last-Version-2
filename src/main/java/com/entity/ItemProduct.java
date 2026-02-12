package com.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;

@Entity
public class ItemProduct {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@jakarta.persistence.Id
	private Long Id;

	@Column(name = "TB_QUANTITY")
	private int quantity;

	@ManyToOne
	private Product product;

	@ManyToOne
	private Invoice invoice;

	
	
	
	public ItemProduct() {
		super();
	}

	public ItemProduct(Long id, int quantity, Product product, Invoice invoice) {

		Id = id;
		this.quantity = quantity;
		this.product = product;
		this.invoice = invoice;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

}
