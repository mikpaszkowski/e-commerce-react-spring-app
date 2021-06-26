package com.example.ecommerceshop.stripe.charge.controller;


import com.example.ecommerceshop.stripe.charge.model.ChargeRequest;
import com.example.ecommerceshop.stripe.charge.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/charge")
public class ChargeController {

    @Autowired
    private StripeService stripeService;

    @PostMapping
    public ResponseEntity<String> charge(@RequestBody ChargeRequest chargeRequest) throws StripeException, AuthenticationException {
        String chargeId = stripeService.charge(chargeRequest);
        return chargeId != null ? new ResponseEntity<String>(chargeId, HttpStatus.OK) : new ResponseEntity<String>("Check the credit card credentials.", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(StripeException.class)
    public String handleStripeException(StripeException ex){
        return ex.getMessage();
    }
}
