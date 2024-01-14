from bs4 import BeautifulSoup

# Assuming your HTML content is in a file named 'input.html'
with open('src\components\htmlSites\SZPBcut.html', 'r', encoding='utf-8') as file:
    html_content = file.read()


# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Extract elements with specific classes
sections = soup.find_all(class_=['a_sec-roz', 'a_par', 'a_pkt'])

# Create a table of contents
table_of_contents = '<ul>'
for section in sections:
    # Get the text content of the section
    section_text = section.get_text(strip=True)
    
    # Create an anchor link to the section
    anchor_link = f'<a href="#{section_text.replace(" ", "_")}">{section_text}</a>'
    
    # Create a list item for the table of contents
    table_of_contents += f'<li>{anchor_link}</li>'

table_of_contents += '</ul>'

# Insert the table of contents into the HTML content
body_tag = soup.body
if body_tag:
    table_of_contents_tag = BeautifulSoup(table_of_contents, 'html.parser')
    body_tag.insert(0, table_of_contents_tag)

# Save the result to an output HTML file
with open('output_with_toc.html', 'w', encoding='utf-8') as output_file:
    output_file.write(str(soup))

print("Table of contents added and saved to output_with_toc.html.")
