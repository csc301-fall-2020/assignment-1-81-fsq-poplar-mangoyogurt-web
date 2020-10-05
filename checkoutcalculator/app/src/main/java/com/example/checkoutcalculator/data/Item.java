package com.example.checkoutcalculator.data;

public class Item {
    private String name;
    private int quantity;
    private int id;

    void setName(String name) {
        this.name = name;
    }
    void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    void setId(int id) {
        this.id = id;
    }

    String getName() {
        return this.name;
    }

    int getQuantity() {
        return this.quantity;
    }

    int getId() {
        return this.id;
    }
}

