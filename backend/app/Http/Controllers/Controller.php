<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;//nzidha ana
use Illuminate\Http\Request;

class Controller extends BaseController
{

    public function getProduct(Request $request){
        $user= User::all();//yjiblo tous les produits User:: chnoksed biha instance hthi 
        return $user;

    }
    public function createProduct(Request $request){

       $user= new User(); //bch y3ml creation mt3 new produit 
        $user-> name= $request->name ;
        $user-> desc= $request->desc ;
        $user-> price= $request->price ;
        $user->save();//bch ma d5l corrdone kol y3ml save 
        if($user){
            return response()->json($user); 
        }else
        {
            return response()->json([ //ken ma sartch cretauon bch y5rj error data invalid
                "error",
                "Data invalid"
            ]);
        }

      

    }
    public function updateProduct(Request $request ,$id){

     $user= User::find($request->id); //n7b n3ml update ala produit 
        $user-> name= $request->name ;
        $user-> desc= $request->desc ;
        $user-> price= $request->price ;
        $user->save();
        return response()->json(
           $user
        );

    }
    public function deleteProduct(Request $request ,$id){ //n7b nfs5 produit 
        $user= User::find($request->id);
        $user->delete();
        
            return response()->json([
                "message",
                "data deleted"
            ]);
    }
    public function getProductById(Request $request ,$id){
        $user=User::find($request->id);
        return $user;
    }

}
