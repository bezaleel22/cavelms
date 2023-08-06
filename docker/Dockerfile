FROM postgres:15
RUN apt-get update

ENV init_tools ca-certificates wget
RUN apt-get install -y --no-install-recommends $init_tools

WORKDIR /home/pg_graphql

RUN wget https://github.com/supabase/pg_graphql/releases/download/v1.3.0/pg_graphql-v1.3.0-pg15-amd64-linux-gnu.deb
RUN dpkg -i pg_graphql-v1.3.0-pg15-amd64-linux-gnu.deb

USER postgres