
hnlists-firefox.zip: hnlists.min.js *.png
	MANIFEST=$$(jq -c -M '. += {"manifest_version": 2}' < manifest.template.json) && \
	echo $$MANIFEST > manifest.json
	zip $@ $^ manifest.json

hnlists-chrome.zip: hnlists.min.js *.png
	MANIFEST=$$(jq -c -M '. += {"manifest_version": 3}' < manifest.template.json) && \
	echo $$MANIFEST > manifest.json
	zip $@ $^ manifest.json

hnlists.min.js: *.js
	npx uglifyjs --compress --mangle < $^ > $@

.PHONY: clean
clean:
	-rm -rf *.zip *.min.js manifest.json hnlists-firefox hnlists-chrome