package com.example.checkoutcalculator.data;

public class Main {
    public static void main(String[] args){

        Item apple = new Item();
        apple.setName("Apple");
        apple.setPrice(5.99);
        Item peach = new Item();
        peach.setPrice(4.99);
        peach.setName("peach");
        Item orange = new Item();
        orange.setName("orange");
        orange.setPrice(3.99);

        Cart cart = new Cart();
        cart.addItem(apple, 2);
        cart.addItem(apple, 3);
        cart.addItem(orange, 2);
        cart.addItem(peach, 5);
        System.out.println("total sum" + cart.getSum());

    }
}
