<script setup lang="ts"></script>

<template>
    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>DIRECCIÓN DE LA TIENDA</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
-->
                    <div id="map">
                        <iframe
                        
                            src="https://maps.google.com/maps?q=Parada+a+Tarabuco,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="left-content">
                        <h4>CONTÁCTANOS</h4>
                        <p>Estamos ubicados en la ciudad de Sucre - Chuquisaca - Bolivia.<br><br>Direcion: Av. German Mendoza zona Parada Tarabuco.</p>
                        <ul class="social-icons">

                            <li><a href="https://wa.me/+59168615340"><i class="fa fa-whatsapp"></i></a></li>
                            <a href="https://wa.me/+59168615340"><button class="btn btn-success">WHATSAPP</button></a>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </template>