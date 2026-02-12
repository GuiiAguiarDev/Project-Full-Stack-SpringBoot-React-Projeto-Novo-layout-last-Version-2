package com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
	
	//quando for fazer assim tem que ter um nome no metodo se nao nao funciona no caso abaixo
	//id, se nao nao funcionaria
	Optional<Invoice> findTopByOrderByIdDesc();

}
