package com.example.ecommerceshop.stripe.charge.model;

import lombok.Data;

@Data
public class ChargeRequest {

    private int amount;
    private Currency currency;
    private String email;
    private Token token;

    public enum Currency{
        EUR, USD;
    }
}
