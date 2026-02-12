package com.service;

import org.springframework.stereotype.Service;

import com.entity.ItemProduct;
import com.repository.ItemProductRepository;

import jakarta.transaction.Transactional;

@Service
public class IntemProductService {

	private ItemProductRepository itemProductRepository;

	public IntemProductService(ItemProductRepository itemProductRepository) {

		this.itemProductRepository = itemProductRepository;
	}

	@Transactional
	public void save(ItemProduct item) {
		itemProductRepository.save(item);
	}

}
