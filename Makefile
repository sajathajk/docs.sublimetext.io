# Makefile for Sublime Documentation
# 

BUILDDIR      = docs/.vuepress/dist

.PHONY: help clean build

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  satisfy     to satisfy the yarn dependencies"
	@echo "  build       generate vuepress documentation"

clean:
	@echo "Removing all files under $(BUILDDIR)/"
	-rm -rf $(BUILDDIR)/*
	@echo "Removal finished."


satisfy:
	@echo "Downloading yarn dependencies"
	yarn
	@echo
	@echo "Satisfy finsihed"

build:
	yarn build
	@echo
	@echo "Build finished. The static pages are in $(BUILDDIR)/."