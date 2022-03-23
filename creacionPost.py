from tkinter.ttk import Style
from bs4 import BeautifulSoup, NavigableString
with open('w.html','r') as f:
    lines = f.read()#.split(">")

soup = BeautifulSoup( lines , 'html.parser')
mydiv=soup.find("div", class_="wp-block-column")#pillo el div contenedor de divs


#le meto el p
new_tag_p = soup.new_tag("p", class_="has-text-align-center")
titulo = NavigableString("Hello!")
new_tag_p.insert(0,titulo)
#div del contenido
new_tag_div_grande = soup.new_tag("div", class_="wp-block-columns")
#div con el texto
new_tag_div_texto = soup.new_tag("div", class_="wp-block-column")
#creo el p y le meto texto y estilo
new_tag_texto=soup.new_tag("p")
texto = NavigableString("texttt")
new_tag_texto.insert(0,texto)
new_tag_style_texto=soup.new_tag('style', type='text/css')
new_tag_texto.append(new_tag_style_texto)
new_tag_texto.style.append('flex-basis:66.66%')

#meto el p en el div texto
new_tag_div_texto.append(new_tag_texto)





#creo el div de la foto
new_tag_div_img = soup.new_tag("div", class_="wp-block-column")






#meto el div texto en el div grande
new_tag_div_grande.append(new_tag_div_texto)

# le append el nuevo p
mydiv.append(new_tag_p)
mydiv.append(new_tag_div_grande)


with open("output1.html", "w", encoding='utf-8') as file:
    file.write(str(soup))

