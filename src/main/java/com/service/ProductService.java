package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.entity.Product;
import com.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class ProductService {

    private final IntemProductService intemProductService;

	private final ProductRepository repositoryProduct;

	public ProductService(ProductRepository repositoryProduct, IntemProductService intemProductService) {

		this.repositoryProduct = repositoryProduct;

		this.intemProductService = intemProductService;
	}

	@Transactional
	public Product save(Product product) {
		
		Optional<Product> existingProduct = repositoryProduct.findByName(product.getName());
		if(existingProduct.isPresent()) {
			Product p = existingProduct.get();
			
			//soma no estoque
			p.setEstoque(p.getEstoque()+ product.getEstoque());
			
			//atualiza o preco opcional
			p.setPrice(product.getPrice());
			
			return repositoryProduct.save(p);
		}
		return repositoryProduct.save(product);
	}

	@Transactional
	public void delete(Long id) {
		repositoryProduct.deleteById(id);
	}

	public List<Product> findAll() {
		return repositoryProduct.findAll();
	}

}
