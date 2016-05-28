    
            var count =0;
            var d;
            
            function input() {
                
                var dys = document.getElementById("days").value;
                var hrs = document.getElementById("hrs").value;
                var min = document.getElementById("min").value;
                var sec = document.getElementById("sec").value;
                
                 totalseconds = (dys*24*60*60) + (hrs*60*60) + (min*60)  + (1*sec);
               // document.getElementById("demo").innerHTML = convert; -- to print and check values
                
            }
            
            function timer() {
                
                if(count == 1 && totalseconds >= 0)
                   
                {
 
                                       
                        var convsec = (totalseconds%60);
                        var convmin = (totalseconds/60)%60;
                        var convhrs = ((totalseconds/60)/60)%24;
                        var convdays = ((totalseconds/60)/60)/24;
                    
                        document.getElementById("Days").innerHTML = Math.floor(convdays);
                        document.getElementById("hours").innerHTML = Math.floor(convhrs);
                        document.getElementById("minutes").innerHTML = Math.floor(convmin);
                        document.getElementById("seconds").innerHTML = Math.floor(convsec);
                        
                         totalseconds--;
                    }
            }
        
            function starttimer() {
                
                count =1;
                d= setInterval(timer,1000);
                
            }
            
            function stoptimer() {
                
                count = 0;
                clearInterval(d);
            }
            
            function resettimer()
            
            {
                count = 0;
                clearInterval(d);
                document.getElementById("Days").innerHTML = 00 ;
                document.getElementById("hours").innerHTML = 00 ;
                document.getElementById("minutes").innerHTML = 00 ;
                document.getElementById("seconds").innerHTML = 00 ;
                
                input();
                
            }
        
       