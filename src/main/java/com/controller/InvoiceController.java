package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Invoice;
import com.service.InvoiceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/invoice")
public class InvoiceController {

	private final InvoiceService invoiceService;

	public InvoiceController(InvoiceService invoiceService) {

		this.invoiceService = invoiceService;

	}

	// Posso fazer um front parea um metodo tbm e não necessariamente para um
	// entity, por exemplo.
	// Criei o metodo comprar no InvoiceService e to chamando na controler agora e
	// vou fazer
	// um front para ele ou seja uma tela agora.
	@PostMapping("/comprar")
	public Invoice comprar(@RequestParam String nameProduct, @RequestParam int qtdProductBuyed) {
		Invoice invoice = new Invoice();

		return invoiceService.addItem(nameProduct, qtdProductBuyed, invoice);
		
	}

}
