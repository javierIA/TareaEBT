# Amazon Web Scraper and Data Analysis for EBT-Homework

This repository contains a simple web scraper for scraping product data from Amazon, and some scripts to perform basic data analysis on the scraped data.

## Project Structure

The project has two main scripts:

1. `scraper.py`: This script uses BeautifulSoup to scrape product data from an Amazon HTML file. It extracts the product name, price and reviews and stores the data in an Excel file.

2. `analysis.py`: This script uses pandas and matplotlib to perform basic data analysis on the scraped data. It includes some simple statistics and a histogram of product prices.

## Installation

To install the dependencies for this project, run:

```bash
pip install -r requirements.txt
```

This will install the required packages, including:

BeautifulSoup4
pandas
matplotlib
openpyxl

## Usage
First, run the scraper script to scrape data and store it in an Excel file:

```bash
python scraper.py
```

Then, run the analysis script to perform data analysis on the scraped data:

```bash
python analysis.py
```

