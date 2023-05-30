import pandas as pd
from bs4 import BeautifulSoup
import analysis
# Open and read the HTML file
with open("assets/Amazon.com.mx _ Cervezas.html", "r") as f:
    content = f.read()

soup = BeautifulSoup(content, 'html.parser')

data = []

# Find all divs with the specified class
for div in soup.find_all('div', class_="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis s-latency-cf-section s-card-border"):
    try:
        # Try to find product name
        product_name = div.find('span', class_="a-size-base-plus a-color-base a-text-normal").text.strip()
    except:
        product_name = " "
    try:
        # Try to find product price
        product_price = div.find('span', class_="a-price-whole").text.strip()
    except:
        product_price = " "
    try:
        # Try to find product reviews
        product_reviews = div.find('span', class_="a-size-base").text.strip()
    except:
        product_reviews = " "
    try:
        # Try to find product ratings
        product_rating = div.find('i', class_="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom").text.strip()
    except:
        product_rating = " "
    try:
        # Try to find product description
        product_description = div.find('a', class_="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal").text.strip()
    except:
        product_description = " "

    # Append the data to our list
    data.append([product_name, product_price, product_reviews, product_rating, product_description])

# Create a DataFrame from our data
df = pd.DataFrame(data, columns=["Product_Name", "Product_Price", "Product_Reviews", "Product_Rating", "Product_Description"])

# Save DataFrame to Excel
df.to_excel("AmazonData.xlsx", index=False)

