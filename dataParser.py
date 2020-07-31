import pandas as pd

df = pd.read_csv('data/DL-us-m50_index.csv')

print(df.head())

print(df.info())

print(df.shape)

print(df.isnull().sum())

print(df.describe())

df[df['admin_level'] == 1].to_csv("us_states_data.csv")

df[df['admin_level'] == 1].describe().to_csv("all_us_summary.csv")





