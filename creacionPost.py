from tkinter.ttk import Style
from bs4 import BeautifulSoup, NavigableString
with open('index.html','r', encoding='utf-8') as f:
    lines = f.read()#.split(">")

soup = BeautifulSoup( lines , 'html.parser')
mydiv=soup.find("div", class_="wp-block-column")#pillo el div contenedor de divs

new_tag_div_grande = soup.new_tag("div", class_="wp-block-columns")
#div con el texto
titulo='''
<p class="has-text-align-center"><strong><mark class="has-inline-color has-vivid-green-cyan-color" style="background-color:rgba(0, 0, 0, 0)">{}</mark></strong></p>
'''.format(input("Escribe el titulo\n"))
new_tag_div_grande.append(BeautifulSoup(titulo, 'html.parser'))
texto=input("Escribe el texto\n")
enlace=input("Escribe el enlace\n")
img=input("Escribe el nombre de la imagen\n")
div= '''
<div class="wp-block-columns">
<div class="wp-block-column" style="flex-basis:66.66%">
<p>{}</p>
<p>Learn how I did it <a href="{}" rel="noreferrer noopener" target="_blank"><strong>Here</strong> </a>!</p>
</div>
<div class="wp-block-column" style="flex-basis:33.33%">
<figure class="wp-block-image size-large"><img alt="" class="wp-image-112" height="576" sizes="(max-width: 1024px) 100vw, 1024px" src="{}" width="1024"></figure>
</div>
</div>
'''.format(texto,enlace,img)
new_tag_div_grande.append(BeautifulSoup(div, 'html.parser'))

# le append el nuevo p

mydiv.append(new_tag_div_grande)


with open("index.html", "w", encoding='utf-8') as file:
    file.write(str(soup))

