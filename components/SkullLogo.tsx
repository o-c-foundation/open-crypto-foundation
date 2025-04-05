import React from 'react';

export default function SkullLogo({ className = "", size = "md" }: { className?: string, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  // ASCII art embedded directly in the component instead of loading from a file
  const asciiArt = `                 .************,.                
             ,*********.*********.             
           .********,     ,*******.           
         .*******.           .*******.         
        .*****,                 ,*****.        
       ******                     ******       
      .****,                       ,****.      
      *****                         *****      
     *****                           *****     
     ****,                           ,****     
     ****                             ****     
     ****                             ****     
     ****       **             **     ****     
     ****       ***,         ,***     ****     
     *****      ***           ***    *****     
     ,****       **,         ,**     ****.     
      ****,       ***       ***     ,****      
      ,*****      ***********     *****.       
       ,******    ***********   ******.        
        ,******   ***********  ******.         
          ******  *********** ******.          
           ,***** *********** *****.           
             ***** ********* *****.            
              .****.**,,,**.****.              
                .**************                
                 ,************,                
                   ,********,                  
                    ,******.                   
                      ,**,                     `;

  // Set font size based on the size prop
  const fontSize = {
    xs: 'text-[0.25rem] sm:text-[0.3rem]',
    sm: 'text-[0.3rem] sm:text-[0.4rem]',
    md: 'text-[0.4rem] sm:text-[0.5rem]',
    lg: 'text-[0.5rem] sm:text-[0.7rem]',
    xl: 'text-[0.6rem] sm:text-[0.9rem]'
  }[size];

  return (
    <pre 
      className={`font-mono text-white whitespace-pre leading-[1] ${fontSize} ${className}`}
      aria-label="ASCII Skull Logo"
    >
      {asciiArt}
    </pre>
  );
} 