# Instala o python 3.12
FROM python:3.12

# Cria o diretório de trabalho
WORKDIR /code

# Instala as dependências do projeto
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

# Expõe a porta 8000
EXPOSE 8000

# Copia o projeto para o diretório
COPY . .

# Inicia o servidor web uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]