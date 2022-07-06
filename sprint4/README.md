# Proyecto Integrador: Sprint 2 - v2
Este es el ciclo que intente hacer en index                  
                        <% for(let i = 0; i < productosVenta.length; i++){ %>
                        <div class="producto"> 
                            <img class="imagenProducto" src= productosVenta[i].imagen  width="360" alt= productosVentas[i].nombre>
                            <i class="fas fa-truck green_truck"></i>
                            <br><br><hr/>
                        <p><%= productosVenta[i].precio %></p>
                        <p><%= productosVenta[i].descuento %></p>
                        <h4><%= productosVenta[i].descripcion %></h4>
                    </div>
            
                      <% } %>

                       <div class="producto"> 
                    <img class="imagenProducto" src="images/nike1.jpg" width="360" alt="Nike Revolution 6">
                    <i class="fas fa-truck green_truck"></i>
                    <br><br><hr/>
                    <p>$13.499</p>
                    <p>10% off</p>
                    <h4>Nike Revolution 6 Next Nature</h4>
                    </div>

    <div class="producto">  
                        <img class="imagenProducto" src="images/nike2.jpg" width="360" alt="Nike Air Max Intrlk">
                        <i class="fas fa-truck green_truck"></i>
                        <br><br><hr/>
                        <p>$17.499</p>
                        <p>10% off</p>
                        <h4>Nike Air Max Intrlk 75</h4>
                    </div>
                    <div class="producto"> 
                    <img class="imagenProducto" src="images/remera1.jpg" width="360" alt="Remera Fila Animal">
                    <i class="fas fa-truck green_truck"></i>
                    <br><br><hr/>
                    <p>$5.499</p>
                    <p>15% off</p>
                    <h4>Remera Fila Animal</h4>
                    </div>
    
                    <div class="producto">   
                    <img class="imagenProducto" src="images/buzo1.jpg" width="360" alt="Buzo Umbro Est">
                    <i class="fas fa-truck green_truck"></i>
                    <br><br><hr/>
                    <p>$7.749</p>
                    <p>10% off</p>
                    <h4>Buzo Umbro Est. Champions</h4>
                    </div>
    
                    <div class="producto"> 
                    <img class="imagenProducto" src="images/campera1.jpg" width="360" alt="Puma Warmcell Lightweight">
                    <i class="fas fa-truck green_truck"></i>
                    <br><br><hr/>
                    <p>$21.499</p>
                    <p>20% off</p>
                    <h4>Puma Warmcell Lightweight</h4>
                    </div>
    
                    <div class="producto"> 
                    <img class="imagenProducto" src="images/conjunto1.jpg" width="360" alt="Topper Deportivo">
                    <i class="fas fa-truck green_truck"></i>
                    <br><br><hr/>
                    <p>$10.499</p>
                    <p>15% off</p>
                    <h4>Conjunto Topper Deportivo</h4>
                    </div>                   

                    ciclo for
                      <div class="producto"> 
                    <% for(let i = 0; i < productosVenta.length; i++){ %>
                 <img class="imagenProducto" src= "<%= productosVenta [i]+ Imagen %> " width="360" alt= "Nike Revolution 6"> 
                   <i class="fas fa-truck green_truck"></i>
                   <br><br><hr/>
               <p><%= productosVenta[i]+precio %></p>
               <p><%= productosVenta[i]+descuento %></p>
               <h4><%= productosVenta[i]+descripcion %></h4>
               <% } %>
           </div>