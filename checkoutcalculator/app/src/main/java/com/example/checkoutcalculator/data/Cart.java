package com.example.checkoutcalculator.data;

import java.util.ArrayList;

public class Cart {
    private ArrayList<Item> items;

    void addItem(Item item) {
        this.items.add(item);
    }

    public ArrayList<Item> getItems() {
        return this.items;
    }
}
