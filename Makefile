run: all
	-node app.js

all: app.ts

app.ts:
	@echo 'Compiling TypeScript...'
	tsc --module commonjs app.ts
	@echo 'Done'

install:
	npm install
