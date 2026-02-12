package com.service;

import org.springframework.stereotype.Service;

import com.entity.Invoice;
import com.entity.ItemProduct;
import com.entity.Product;
import com.repository.InvoiceRepository;
import com.repository.ItemProductRepository;
import com.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class InvoiceService {

	private final InvoiceRepository invoiceRepository;
	private final ProductRepository productRepository;
	private final ItemProductRepository itemProductRepository;

	public InvoiceService(InvoiceRepository invoiceRepository, ProductRepository productRepository,
			ItemProductRepository itemProductRepository) {

		this.invoiceRepository = invoiceRepository;
		this.productRepository = productRepository;
		this.itemProductRepository = itemProductRepository;
	}

	@Transactional
	public void save(Invoice invoice) {
		invoiceRepository.save(invoice);
	}

	

	
	public Invoice addItem(String productName, int qtdProductBuyed, Invoice invoice) {

		// Busca a nota existente ou cria uma nova se nao existir
		Invoice currentInvoice = invoiceRepository.findTopByOrderByIdDesc().orElseGet(() -> {
			Invoice newInvoice = new Invoice();
			newInvoice.setPrice(0.0);
			return invoiceRepository.save(newInvoice);

		});

		
		// Busca o produto pelo nome
		Product product = productRepository.findAll().stream().filter(p -> p.getName().equalsIgnoreCase(productName))
				.findFirst().orElseThrow(() -> new RuntimeException("Product not found"));

		// Verifica se a quantidade do produto que queremos comprar existe
		if (qtdProductBuyed <= 0) {
			throw new RuntimeException("Quantity invalid");

		}

		// verifica o estoque
		if (product.getEstoque() < qtdProductBuyed) {
			throw new RuntimeException("stock invalid");
		}

		// Atualiza o estoque
		product.setEstoque(product.getEstoque() - qtdProductBuyed);
		productRepository.save(product);

		// cria item na nota, insere o item na nota
		ItemProduct item = new ItemProduct();
		item.setInvoice(currentInvoice);
		item.setProduct(product);
		item.setQuantity(qtdProductBuyed);
		itemProductRepository.save(item);

		// Atualiza preco total da total conforme for adicionando novos item
		double totaItem = product.getPrice() * qtdProductBuyed;
		currentInvoice.setPrice(currentInvoice.getPrice() + totaItem);


		// salva invoice
		return invoiceRepository.save(currentInvoice);

	}
}
