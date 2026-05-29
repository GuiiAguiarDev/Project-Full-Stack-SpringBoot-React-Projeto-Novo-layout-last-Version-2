package com.service;

import org.springframework.stereotype.Service;

import com.entity.ItemProduct;
import com.repository.ItemProductRepository;

import jakarta.transaction.Transactional;

@Service
public class ItemProductService {

	private ItemProductRepository itemProductRepository;

	public ItemProductService(ItemProductRepository itemProductRepository) {

		this.itemProductRepository = itemProductRepository;
	}

	/*Não precisaria ter essa classe, porque nao estou usando nenhuma regra, s eeu quisesse
	 * usar algo do itemProduct poderia chamar direto da repository, por ai sim a repository
	 * dele eu preciso ter.Agr se eu fosse ter alguma regra ou algo do tipo ai sim eu
	 * precisaria., mas vamos deixar ela aqui*/
	@Transactional
	public void save(ItemProduct item) {
		itemProductRepository.save(item);
	}

}
