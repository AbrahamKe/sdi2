import dash
from dash import html
import pandas as pd

df = pd.read_csv('D:/tocsv/climatedata.csv')


def generate_table(dataframe, max_rows=400):
    return html.Table([
        html.Thead(
            html.Tr([html.Th(col) for col in dataframe.columns])
        ),
        html.Tbody([
            html.Tr([
                html.Td(dataframe.iloc[i][col]) for col in dataframe.columns
            ]) for i in range(min(len(dataframe), max_rows))
        ])
    ])


app = dash.Dash(__name__)

app.layout = html.Div([
    html.H4(children='Climate Data'),
    generate_table(df)
])

if __name__ == '__main__':
    app.run_server(debug=True)