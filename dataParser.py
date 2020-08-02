import pandas as pd

""" df = pd.read_csv('data/DL-us-m50_index.csv')

print(df.head())

print(df.info())

print(df.shape)

print(df.isnull().sum())

print(df.describe())

df[df['admin_level'] == 1].to_csv("us_states_data.csv")

df[df['admin_level'] == 1].describe().to_csv("all_us_summary.csv") """

df = pd.read_csv('us_states_all_transposed.csv')

print(df.head())

""" df[['date','Alabama']].rename(columns={'Alabama':'number'}).to_csv("Alabama.csv", index=False)
df[['date','Alaska']].rename(columns={'Alaska':'number'}).to_csv("Alaska.csv", index=False)
df[['date','Arizona']].rename(columns={'Arizona':'number'}).to_csv("Arizona.csv", index=False)
df[['date','Arkansas']].rename(columns={'Arkansas':'number'}).to_csv("Arkansas.csv", index=False)
df[['date','California']].rename(columns={'California':'number'}).to_csv("California.csv", index=False)
df[['date','Colorado']].rename(columns={'Colorado':'number'}).to_csv("Colorado.csv", index=False)
df[['date','Connecticut']].rename(columns={'Connecticut':'number'}).to_csv("Connecticut.csv", index=False)
df[['date','Delaware']].rename(columns={'Delaware':'number'}).to_csv("Delaware.csv", index=False)
df[['date','Florida']].rename(columns={'Florida':'number'}).to_csv("Florida.csv", index=False)
df[['date','Georgia']].rename(columns={'Georgia':'number'}).to_csv("Georgia.csv", index=False)
df[['date','Hawaii']].rename(columns={'Hawaii':'number'}).to_csv("Hawaii.csv", index=False)
df[['date','Idaho']].rename(columns={'Idaho':'number'}).to_csv("Idaho.csv", index=False)
df[['date','Illinois']].rename(columns={'Illinois':'number'}).to_csv("Illinois.csv", index=False)
df[['date','Indiana']].rename(columns={'Indiana':'number'}).to_csv("Indiana.csv", index=False)
df[['date','Iowa']].rename(columns={'Iowa':'number'}).to_csv("Iowa.csv", index=False)
df[['date','Kansas']].rename(columns={'Kansas':'number'}).to_csv("Kansas.csv", index=False)
df[['date','Kentucky']].rename(columns={'Kentucky':'number'}).to_csv("Kentucky.csv", index=False)
df[['date','Louisiana']].rename(columns={'Louisiana':'number'}).to_csv("Louisiana.csv", index=False)
df[['date','Maine']].rename(columns={'Maine':'number'}).to_csv("Maine.csv", index=False)
df[['date','Maryland']].rename(columns={'Maryland':'number'}).to_csv("Maryland.csv", index=False)
df[['date','Massachusetts']].rename(columns={'Massachusetts':'number'}).to_csv("Massachusetts.csv", index=False)
df[['date','Michigan']].rename(columns={'Michigan':'number'}).to_csv("Michigan.csv", index=False)
df[['date','Minnesota']].rename(columns={'Minnesota':'number'}).to_csv("Minnesota.csv", index=False)
df[['date','Mississippi']].rename(columns={'Mississippi':'number'}).to_csv("Mississippi.csv", index=False)
df[['date','Missouri']].rename(columns={'Missouri':'number'}).to_csv("Missouri.csv", index=False)
df[['date','Montana']].rename(columns={'Montana':'number'}).to_csv("Montana.csv", index=False)
df[['date','Nebraska']].rename(columns={'Nebraska':'number'}).to_csv("Nebraska.csv", index=False)
df[['date','Nevada']].rename(columns={'Nevada':'number'}).to_csv("Nevada.csv", index=False)
df[['date','New Hampshire']].rename(columns={'New Hampshire':'number'}).to_csv("New Hampshire.csv", index=False)
df[['date','New Jersey']].rename(columns={'New Jersey':'number'}).to_csv("New Jersey.csv", index=False)
df[['date','New Mexico']].rename(columns={'New Mexico':'number'}).to_csv("New Mexico.csv", index=False)
df[['date','New York']].rename(columns={'New York':'number'}).to_csv("New York.csv", index=False)
df[['date','North Carolina']].rename(columns={'North Carolina':'number'}).to_csv("North Carolina.csv", index=False)
df[['date','North Dakota']].rename(columns={'North Dakota':'number'}).to_csv("North Dakota.csv", index=False)
df[['date','Ohio']].rename(columns={'Ohio':'number'}).to_csv("Ohio.csv", index=False)
df[['date','Oklahoma']].rename(columns={'Oklahoma':'number'}).to_csv("Oklahoma.csv", index=False)
df[['date','Oregon']].rename(columns={'Oregon':'number'}).to_csv("Oregon.csv", index=False)
df[['date','Pennsylvania']].rename(columns={'Pennsylvania':'number'}).to_csv("Pennsylvania.csv", index=False)
df[['date','Rhode Island']].rename(columns={'Rhode Island':'number'}).to_csv("Rhode Island.csv", index=False)
df[['date','South Carolina']].rename(columns={'South Carolina':'number'}).to_csv("South Carolina.csv", index=False)
df[['date','South Dakota']].rename(columns={'South Dakota':'number'}).to_csv("South Dakota.csv", index=False)
df[['date','Tennessee']].rename(columns={'Tennessee':'number'}).to_csv("Tennessee.csv", index=False)
df[['date','Texas']].rename(columns={'Texas':'number'}).to_csv("Texas.csv", index=False)
df[['date','Virginia']].rename(columns={'Virginia':'number'}).to_csv("Virginia.csv", index=False)
df[['date','Washington']].rename(columns={'Washington':'number'}).to_csv("Washington.csv", index=False)
df[['date','Washington, D.C.']].rename(columns={'Washington, D.C.':'number'}).to_csv("Washington DC.csv", index=False)
df[['date','West Virginia']].rename(columns={'West Virginia':'number'}).to_csv("West Virginia.csv", index=False)
df[['date','Wisconsin']].rename(columns={'Wisconsin':'number'}).to_csv("Wisconsin.csv", index=False)
df[['date','Wyoming']].rename(columns={'Wyoming':'number'}).to_csv("Wyoming.csv", index=False) """
df[['date','Utah']].rename(columns={'Utah':'number'}).to_csv("Utah.csv", index=False)
df[['date','Vermont']].rename(columns={'Vermont':'number'}).to_csv("Vermont.csv", index=False)





