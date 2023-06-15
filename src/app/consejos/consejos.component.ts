import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {
  contents1: { title: string, content: string }[] = [
    { title: 'Estudia tu producto al detalle', content: 'Si no crees en tu producto ¿quién va a creer en él? Antes de lanzarte a venderlo debes conocerlo al detalle si realmente quieres que los consumidores confíen en ti, ¿cómo sino vas a responder sus dudas? ¿Y a darles consejos para sacarle provecho? '+ 'Así que estudia todos los detalles, su historia, sus reconocimientos y, sobre todo, la propuesta de valor.'+ 'Del mismo modo, debes estudiar a fondo la marca y utilizar cierto tipo de mensajes publicitarios establecidos, usar el mismo tono, etc.' },
    { title: 'Sigue un proceso', content: 'Uno de los primeros errores es pensar que un buen vendedor es aquella persona que tiene la habilidad de convencer a cualquiera en cualquier momento. La verdad es que ninguna venta ocurre por casualidad, siempre hay un proceso que necesita ser seguido, al menos cuando hablamos de alguien que tiene un desempeño regular, sin grandes oscilaciones. Por tener un proceso de ventas bien definido y seguirlo tú podrás anticipar el comportamiento de los clientes y actuar de forma que ellos continúen interesados ​​en la compra.' },
    { title: 'Utiliza toda la ayuda que puedas encontrar', content: 'No hay vergüenza alguna en pedir ayuda y aprovechar las oportunidades que tienes de tener tu trabajo facilitado. Por lo tanto, utiliza toda la ayuda disponible. Por ejemplo, elige buenas herramientas de ventas que te hagan más productivo y te ayuden a aumentar la eficiencia de tu proceso. Además, observa a vendedores con más experiencia y pide consejos cuando sea apropiado. Incluso las acciones que parecen pequeñas ciertamente van a marcar la diferencia y te convertirán en un profesional más completo y confiado.' }
  ];

  contents2: { title: string, content: string }[] = [
    { title: 'Estudia también a tu cliente', content: 'Si conocer el producto es FUNDAMENTAL, conocer al cliente puede que lo sea aún más. ¿Recuerdas cuando hablábamos de la importancia de la empatía para ser un buen vendedor? Entonces, ¿cómo pretendes ponerte en la piel de tus clientes si no sabes quiénes son?' },
    { title: 'Sé un buen planificador', content: 'Es muy probable que tu escenario ideal de trabajo no implica negociar con un cliente solo a la vez, ¿verdad? Por eso, tú necesitas adquirir la capacidad de planificar bien. La falta de planificación puede resultar en conflictos de agenda, cancelación de reuniones, información intercambiada y otros inconvenientes, lo que nunca es bueno para las ventas. Por eso, sea organizado para siempre honrar con tus compromisos de forma puntual y mostrarse bien preparado para atender las demandas de todos los prospectos con quienes estés negociando.' },
    { title: 'Conoce tu producto', content: 'Nadie confía en un vendedor que no tiene convicción en el producto que está vendiendo, y peor aún es el caso de quien ni siquiera sabe de lo que está hablando. Por eso, debes estar dispuesto a conocer cada detalle del producto o servicio que vendes, pues eso es esencial para pasarle confianza a los clientes.' }
  ];

  currentIndex1: number = 0;
  currentIndex2: number = 0;

  ngOnInit(): void {
    this.startContentRotation();
  }

  startContentRotation(): void {
    interval(5000) //Cambiar el tiempo cada 5 segundos.
      .pipe(take(this.contents1.length))
      .subscribe(() => {
        this.currentIndex1 = (this.currentIndex1 + 1) % this.contents1.length;
      });

    interval(5000)
      .pipe(take(this.contents2.length))
      .subscribe(() => {
        this.currentIndex2 = (this.currentIndex2 + 1) % this.contents2.length;
      });
  }

}
