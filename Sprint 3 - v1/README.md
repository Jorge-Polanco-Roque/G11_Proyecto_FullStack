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