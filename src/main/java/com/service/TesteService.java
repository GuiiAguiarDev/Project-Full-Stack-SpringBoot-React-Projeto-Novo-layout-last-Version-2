package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.repository.InvoiceRepository;

@Service
public class TesteService {

	@Autowired
	private InvoiceRepository invoiceRepository;

}
