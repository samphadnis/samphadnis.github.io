import pandas as pd

df_states = pd.read_csv('all_us_summary.csv')

df_states_transposed = df_states.T

df_states_transposed.to_csv("us_states_data_transposed.csv")
