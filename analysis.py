import pandas as pd
import matplotlib.pyplot as plt
import matplotlib

matplotlib.use('TkAgg')

df = pd.read_excel("AmazonData.xlsx")

# Analyzing the structure of the data
print(df.info())
print(df.describe())

# Let's see the top 10 most reviewed products
top_reviewed_products = df.sort_values("Product_Reviews", ascending=False).head(10)
print(top_reviewed_products)

print(df['Product_Price'].dtype)

# If it's not object type, convert it to string
if df['Product_Price'].dtype != 'object':
    df['Product_Price'] = df['Product_Price'].astype(str)

# Now, you can use the str methods
df['Product_Price'] = df['Product_Price'].str.replace('$', '') # Remove dollar sign
df['Product_Price'] = df['Product_Price'].astype(float) # Convert to floatnvert to float
plt.hist(df['Product_Price'], bins=30, alpha=0.5)
plt.title('Price distribution')
plt.xlabel('Price')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()


# Let's see the top 10 most expensive products
