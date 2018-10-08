import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-azucar',
  templateUrl: 'azucar.html',
})
export class AzucarPage {

  gle;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  btnclick(){
    if(this.gle>=7 && this.gle<=13.8){
      let alert=this.alertCtrl.create({
				title:'<strong>Hiperglicemia Aislada</strong>',
        subTitle:'<strong>Recomendaciones:</strong><br><br> <p>• Indicar glucemia en ayunas y TGP en pacientes sin diagnóstico.<br><br>• Si deshidratación, rehidratación oral o EV según las demandas.<br><br>• Reevaluar conducta terapéutica en diabéticos y cumplimiento de los pilares.<br><br>• Reevaluar dosis de hipoglucemiantes.</p>' ,
				buttons:['OK']
			  });alert.present();
    }if(this.gle>=13.8 && this.gle<=32){
      let alert=this.alertCtrl.create({
				title:'<strong>Cetoacidosis Diabetica</strong>',
				subTitle:'<strong>Recomendaciones:</strong><br><br><p>• Coordinar traslado y comenzar tratamiento. <br><br> • Hidratación con Solución salina 40 ml/Kg en las primeras 4 horas. 1-2 L la primera hora.<br><br> • Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T). <br><br> • Evitar insulina hasta desaparecer signos de hipopotasemia.<br><br>• Administrar insulina simple 0,1 U/kg EV después de hidratar.</p>',
				buttons:['OK']
        });alert.present();
    }if(this.gle>=33){
      let alert=this.alertCtrl.create({
				title:'<strong>Estado Hiperosmolar Hiperglucemico no Cetosico</strong>',
				subTitle:'<strong>Recomendaciones:</strong><br><br><p>• Coordinar traslado y comenzar tratamiento.  <br><br>• Hidratación con Solución Salina 10-15 ml/Kg/h hasta conseguir estabilidad hemodinámica. <br><br>• Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T).</p>',
				buttons:['OK']
        });alert.present();
    }if(this.gle>=0 && this.gle<=6){
      let alert=this.alertCtrl.create({
				title:'...',
				subTitle:'Recomendaciones:',
				buttons:['OK']
        });alert.present();
    }if(this.gle<0){
      let alert=this.alertCtrl.create({
				title:'Error',
				subTitle:'Valor negativo.',
				buttons:['OK']
        });alert.present();
      }
  }
 
}
