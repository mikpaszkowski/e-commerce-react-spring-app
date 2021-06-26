package com.example.ecommerceshop.stripe.charge.service;


import com.example.ecommerceshop.stripe.charge.model.ChargeRequest;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Service
public class StripeService {

    @PostConstruct
    public void init() {
        Stripe.apiKey = System.getenv("STRIPE_SECRET_KEY");
    }

    @SneakyThrows
    public String charge(ChargeRequest chargeRequest) {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", chargeRequest.getAmount());
        chargeParams.put("currency", ChargeRequest.Currency.USD);
        chargeParams.put("source", chargeRequest.getToken().getId());
        Charge charge = Charge.create(chargeParams);
        return charge.getId();
    }

}
