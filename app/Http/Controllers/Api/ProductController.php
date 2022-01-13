<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    public function getproducts(){
    	$products = Product::paginate(5);
    	return response()->json(['products'=>$products]);
    }

    public function addtoCart(Request $request){
        $product = Product::findOrFail($request->productID);
        // return response()->json(['id',$quantity]);
        $cart = session()->get('cart', []);
        
        if(isset($cart[$request->productID])) {
            $cart[$request->productID]['quantity'] = $request->quantity?$request->quantity:$cart[$request->productID]['quantity']++;
        //    =$quantity;
            $cart[$request->productID]['price']=$product->price*$cart[$request->productID]['quantity'];
        } else {
            $cart[$request->productID] = [
                "id"=>$product->id,
                "name" => $product->name,
                "quantity" => 1,
                "unit_price" => $product->price,
                "price" => $product->price,
                "image" => $product->image
            ];
        }
        session()->put('cart', $cart);
        $cartTotal = 0;
        foreach($cart as $c){
             $cartTotal = $cartTotal+$c['price'];
        }
        // return response()->json(['total'=>$cartTotal]);
        return response()->json(['cartData'=>$cart,'count'=>count($cart),'name'=> $product->name,'total'=>$cartTotal]);
    }

    public function getCart(){
        $cart = session()->get('cart', []);
        $cartTotal = 0;
        foreach($cart as $c){
             $cartTotal = $cartTotal+$c['price'];
        }
        return response()->json(['cartData'=>$cart,'count'=>count($cart),'total'=>$cartTotal]);
    }

    public function removeCart(Request $request){
        $product = Product::findOrFail($request->id['id']);
        // return response()->json();
        if($request->id['id']) {
            $cart = session()->get('cart', []);
            if(isset($cart[$request->id['id']])) {
                unset($cart[$request->id['id']]);
                // unset($cart[$request->id['price']]);
                session()->put('cart', $cart);
            }
            $cartTotal = 0;
            foreach($cart as $c){
                 $cartTotal = $cartTotal+$c['price'];
            }
            return response()->json(['cartData'=>$cart,'count'=>count($cart),'name'=> $product->name,'total'=>$cartTotal]);
        }
    }

    public function SearchProduct($name = null){
        if($name!=null){
            $products=Product::where('name','LIKE','%'.$name."%")->paginate(5);
            return response()->json(['products'=>$products]);
        }else{
            $products=Product::paginate(5);
            return response()->json(['products'=>$products]);
        }
    }
}
